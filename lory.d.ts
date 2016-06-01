/**
 * The Lory carousel
 * 
 */
export declare class Lory {
    
    /**
     * Goes to the prev slide
     * 
     */
    prev() : void
    
    /**
     * Goes to the next slide
     * 
     */
    next() : void
    
    /**
     * Goes to the specified index
     * 
     * @param index the index
     */
    slideTo(index: number) : void
    
    /**
     * Destroys the carouse
     * 
     */
    destroy() : void
}

/**
 * The constructor of the carousel
 * 
 */
export declare function lory(el: any, options?: any) : Lory