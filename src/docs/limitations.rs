//! Limitations and common pitfalls.
//!
//! # Sized types
//!
//! This currently works only for `Sized` types. Unsized types have „fat pointers“, which are twice
//! as large as the normal ones. The [`AtomicPtr`] doesn't support them. One could use something
//! like `AtomicU128` for them. The catch is this doesn't exist and the difference would make it
//! really hard to implement the debt storage/stripped down hazard pointers.
//!
//! A workaround is to use double indirection:
//!
//! ```rust
//! # use arc_swap::ArcSwap;
//! // This doesn't work:
//! // let data: ArcSwap<[u8]> = ArcSwap::new(Arc::from([1, 2, 3]));
//!
//! // But this does:
//! let data: ArcSwap<Box<[u8]>> = ArcSwap::from_pointee(Box::new([1, 2, 3]));
//! # drop(data);
//! ```
//!
//! # Too many [`Guard`]s
//!
//! There's only limited number of "fast" slots for borrowing from [`ArcSwap`] for each single
//! thread (currently 8, but this might change in future versions). If these run out, the algorithm
//! falls back to slower path.
//!
//! If too many [`Guard`]s are kept around, the performance might be poor. These are not intended
//! to be stored in data structures or used across async yield points.
//!
//! [`ArcSwap`]: crate::ArcSwap
//! [`Guard`]: crate::Guard
//! [`AtomicPtr`]: std::sync::atomic::AtomicPtr
