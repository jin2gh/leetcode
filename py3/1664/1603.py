class ParkingSystem:

    def __init__(self, big: int, medium: int, small: int):
        self._db = {
            1: [0, big],
            2: [0, medium],
            3: [0, small]
        }

    def addCar(self, carType: int) -> bool:
        data = self._db[carType]
        if data[0] == data[1]:
            return False
        data[0] += 1
        return True


# Your ParkingSystem object will be instantiated and called as such:
# obj = ParkingSystem(big, medium, small)
# param_1 = obj.addCar(carType)