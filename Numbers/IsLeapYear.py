class Solution:
    def isLeap (self, N):
        # code here
        if N % 100 == 0:
            if N % 400 == 0:
                return 1
            else:
                return 0
        elif N%4 == 0:
            return 1
        else:
            return 0
