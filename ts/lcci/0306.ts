class AnimalShelf {
  cats = []
  dogs = []
  constructor() {}

  enqueue(animal: number[]): void {
    if (this.cats.length + this.dogs.length > 20000) return
    if (animal[1] === 1) {
      this.dogs.push(animal[0])
    } else {
      this.cats.push(animal[0])
    }
  }

  dequeueAny(): number[] {
    if (!this.cats.length || !this.dogs.length) {
      if (!this.cats.length) return this.dequeueDog()
      return this.dequeueCat()
    }
    if (this.cats[0] < this.dogs[0]) return this.dequeueCat()
    return this.dequeueDog()
  }

  dequeueDog(): number[] {
    if (this.dogs.length) return [this.dogs.shift(), 1]
    return [-1, -1]
  }

  dequeueCat(): number[] {
    if (this.cats.length) return [this.cats.shift(), 0]
    return [-1, -1]
  }
}

/**
 * Your AnimalShelf object will be instantiated and called as such:
 * var obj = new AnimalShelf()
 * obj.enqueue(animal)
 * var param_2 = obj.dequeueAny()
 * var param_3 = obj.dequeueDog()
 * var param_4 = obj.dequeueCat()
 */