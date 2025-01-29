import { createSlice } from "@reduxjs/toolkit";

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map(); // Stores key-value pairs with order
    }

    

    put(key, value) {
        if (this.cache.has(key)) {
            this.cache.delete(key); // Update position
        }
        this.cache.set(key, value);

        if (this.cache.size > this.capacity) {
            // Remove least recently used (first item)
            let leastUsedKey = this.cache.keys().next().value;
            this.cache.delete(leastUsedKey);
        }
    }

    toObject() {
        return Object.fromEntries(this.cache); // Convert to plain object for Redux
    }
}

const lruCache = new LRUCache(10); // Set cache capacity

const lruSlice = createSlice({
    name: "lruSlice",
    initialState: { cache: lruCache.toObject() },
    reducers: {
        
        putItem: (state, action) => {
            const { searchQuery, value } = action.payload;
            lruCache.put(searchQuery, value);
            state.cache = lruCache.toObject(); // Update store
        }
    }
});

export const {  putItem } = lruSlice.actions;
export const  lruSlice_reducers=lruSlice.reducer;