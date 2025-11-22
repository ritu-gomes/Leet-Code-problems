func sortString(s string) string {
    r := []rune(s)
    sort.Slice(r, func(i, j int) bool { 
        return r[i] < r[j]
    })
    return string(r)
}

func isAnagram(s string, t string) bool {
    if sortString(s) == sortString(t) {
		return true
	}else{
	return false
	}
}