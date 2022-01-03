// design-circular-queue
/**
 * @param {number} k
 */
var MyCircularQueue = function(k) {
  this.queue = new Array(k + 1)
  this.size = k + 1
  this.front = 0
  this.rear = 0
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
  const next = (this.rear + 1) % this.size
  if (next === this.front) {
    return false
  }
  this.queue[this.rear] = value
  this.rear = next
  return true
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
  if (this.rear === this.front) return false
  this.queue[this.front] = null
  this.front = (this.front + 1) % this.size
  return true
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
  return this.queue[this.front] ?? -1
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
  let last = this.rear ? this.rear : this.queue.length
  return this.queue[last - 1] ?? -1
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
  return this.front === this.rear
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
  return (this.rear + 1) % this.size === this.front
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */