# Sort Colors

Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

Follow up:

Could you solve this problem without using the library's sort function?
Could you come up with a one-pass algorithm using only O(1) constant space?
 

Example 1:

```
Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
```

Example 2:

```
Input: nums = [2,0,1]
Output: [0,1,2]
```

Example 3:

```
Input: nums = [0]
Output: [0]
```

Example 4:

```
Input: nums = [1]
Output: [1]
```

Constraints:

```
n == nums.length
1 <= n <= 300
nums[i] is 0, 1, or 2.
```

## Explanation for the solution No.3 (in Chinese)

用三个变量记录red,white,blue的下标位置。起始下标都为-1

如果A[i] == 0 ，插入red对white blue有影响，blue先整体向后移动一位，white再整体向后移动一位，如果不移动，前面插入的数据就会覆盖已有的。

如果A[i] == 1，插入white对blue有影响，blue整体向后移动一位。

A[i] == 2，直接插入blue

(Ref: SJF0115 of LeetCode)