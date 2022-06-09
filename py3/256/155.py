class MinStack:

    def __init__(self):
        """
        initialize your data structure here.
        """
        self._mins = []
        self._stack = []


    def push(self, x: int) -> None:
        self._stack.append(x)
        self._mins.append(x if not self._mins or self._mins[-1] > x else self._mins[-1])


    def pop(self) -> None:
        self._stack.pop()
        self._mins.pop()


    def top(self) -> int:
        return self._stack[-1]

    def getMin(self) -> int:
        return self._mins[-1]


# Your MinStack object will be instantiated and called as such:
# obj = MinStack()
# obj.push(x)
# obj.pop()
# param_3 = obj.top()
# param_4 = obj.min()