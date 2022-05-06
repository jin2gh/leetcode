class MyQueue:

    def __init__(self):
        self.out_stack = []
        self.in_stack = []


    def push(self, x: int) -> None:
        self.in_stack.append(x)

    def pop(self) -> int:
        if not self.out_stack:
            self._move()
        return self.out_stack.pop()


    def peek(self) -> int:
        if not self.out_stack:
            self._move()
        return self.out_stack[-1]

    def empty(self) -> bool:
        return not self.out_stack and not self.in_stack

    def _move(self) -> None:
        while self.in_stack:
            self.out_stack.append(self.in_stack.pop())

# Your MyQueue object will be instantiated and called as such:
# obj = MyQueue()
# obj.push(x)
# param_2 = obj.pop()
# param_3 = obj.peek()
# param_4 = obj.empty()