## C
`Note: The returned array must be malloced, assume caller calls free().` 
用 `malloc` 手动申请内存，避免函数结束后，数组内存被释放。`returnSize` 指针保存返回数组的大小。   