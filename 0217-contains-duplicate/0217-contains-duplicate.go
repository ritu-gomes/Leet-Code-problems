func containsDuplicate(nums []int) bool {
    m := make(map[int]int)
	for i := 0; i < len(nums); i++ {
		_, ok := m[nums[i]]
		if ok {
			return true
		}else{
			m[nums[i]] = 1
		}
	}
	return false
}