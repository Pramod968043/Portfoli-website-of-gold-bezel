# 278 SHRYYANCH ADNAN

def find_largest_number(array):
    largest = array[0]
    for i in range(1, len(array)):
        if array[i] > largest:
            largest = array[i]
    return largest

# Example usage
arr = [4, 2, 9, 7, 5, 1, 8]
largest_number = find_largest_number(arr)
print("The largest number in the array is:", largest_number)
