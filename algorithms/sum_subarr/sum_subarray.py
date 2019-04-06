'''
    Given an unsorted array A of size N of non-negative integers, 
    find a continuous sub-array which adds to a given number S.

    Input:
    The first line of input contains an integer T denoting the number of 
    test cases. Then T test cases follow. Each test case consists of two lines. 
    The first line of each test case is N and S, where N is the size of array
    and S is the sum. The second line of each test case contains N space 
    separated integers denoting the array elements.

    Output:
    For each testcase, in a new line, print the starting and ending positions(1 indexing)
    of first such occuring subarray from the left if sum equals to subarray, else print -1.

    Constraints:
    1 <= T <= 100
    1 <= N <= 107
    1 <= Ai <= 1010

    Example:
    Input:
    2
    5 12
    1 2 3 7 5
    10 15
    1 2 3 4 5 6 7 8 9 10
    Output:
    2 4
    1 5
'''


def find_sum(length, tsum, arr):
    total = 0
    tail = 0
    head = 0
    while head < len(arr) + 1:
        if total < tsum:
            total += arr[head]
            head += 1
        if total > tsum:
            total -= arr[tail]
            tail += 1
        if total == tsum:
            tail += 1
            return tail, head
    
    return -1
        
        
def create_test_dict(lines):
    test_dict = {}
    test_no = 0
    for idx, line in enumerate(lines):
        if idx % 2:
            A = list(map(int, line.split()))
            test_dict[str(test_no)] = [N, S, A]
            test_no += 1
        else:
            N, S = tuple(map(int, line.split()))
    return test_dict
        



fo = open('input.txt', 'r+')

lines = fo.read().splitlines()
T = int(lines[0])
test_dict = create_test_dict(lines[1:])
ans = []
for key, value in test_dict.items():
    ans.append(find_sum(value[0], value[1], value[2]))

for a in ans:
    if a == -1:
        print(a)
    else:
        print(a[0], a[1])


