class Bank {
  private accounts: number[] = []
  private counts: number = 0
  constructor(balance: number[]) {
    this.accounts = [0, ...balance]
    this.counts = balance.length
  }

  transfer(account1: number, account2: number, money: number): boolean {
    if (!this.checkAccount(account1, money) || !this.checkAccount(account2)) return false
    this.accounts[account1] -= money
    this.accounts[account2] += money
    return true
  }

  deposit(account: number, money: number): boolean {
    if (!this.checkAccount(account)) return false
    this.accounts[account] += money
    return true
  }

  withdraw(account: number, money: number): boolean {
    if (!this.checkAccount(account, money)) return false
    this.accounts[account] -= money
    return true
  }

  checkAccount(account: number, money?: number): boolean {
    const validAccount = account <= this.counts && account >= 1
    if (!money) return validAccount
    return validAccount && this.accounts[account] >= money
  }
}

/**
 * Your Bank object will be instantiated and called as such:
 * var obj = new Bank(balance)
 * var param_1 = obj.transfer(account1,account2,money)
 * var param_2 = obj.deposit(account,money)
 * var param_3 = obj.withdraw(account,money)
 */