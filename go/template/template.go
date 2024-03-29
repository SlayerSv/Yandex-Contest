package main

import (
	"bufio"
	"fmt"
	"os"
)

func solve() {

}

func main() {
	t := 1
	//t = next()
	for t > 0 {
		solve()
		t--
	}
	w.Flush()
}

func init() {
	in, err := os.Open("input.txt")
	if err == nil {
		r = bufio.NewReader(in)
	}
}

var r = bufio.NewReader(os.Stdin)
var w = bufio.NewWriter(os.Stdout)

func next() int {
	var n int
	fmt.Fscan(r, &n)
	return n
}

func nexts() []byte {
	var n string
	fmt.Fscan(r, &n)
	return []byte(n)
}

func nextf() float64 {
	var n float64
	fmt.Fscan(r, &n)
	return n
}

func print(n ...interface{}) {
	fmt.Fprintln(w, n...)
}

func Min[T int | float64](b ...T) (min T) {
	min = b[0]
	for i := 1; i < len(b); i++ {
		if b[i] < min {
			min = b[i]
		}
	}
	return
}

func Max[T int | float64](b ...T) (max T) {
	max = b[0]
	for i := 1; i < len(b); i++ {
		if b[i] > max {
			max = b[i]
		}
	}
	return
}

func Abs[T int | float64](a T) T {
	if a < 0 {
		return -a
	}
	return a
}
