# TASK T

# Shunday function tuzing, u sonlardan tashkil topgan 2'ta array qabul qilsin.
# Va ikkala arraydagi sonlarni tartiblab bir arrayda qaytarsin.

#  MASALAN: mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]); return [0, 3, 4, 4, 6, 30, 31];

#  Yuqoridagi misolda, ikkala arrayni birlashtirib, tartib raqam bo'yicha tartiblab qaytarmoqda.
def merge_sorted_arrays(arr1, arr2):
    result = []
    a = b = 0

    while a < len(arr1) and b < len(arr2):
        if arr1[a] <= arr2[b]:
            result.append(arr1[a])
            a += 1
        else:
            result.append(arr2[b])
            b += 1

    return result + arr1[a:] + arr2[b:]
