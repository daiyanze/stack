
function Stack (data) {
  this.data = data || []

  this.top = 0 + this.data.length

  this.length = function () {
    return this.top
  }

  this.push = function (element) {
    this.data[this.top++] = element

    return this
  }

  this.pop = function (element) {
    if (this.top == 0) return null

    return this.data[--this.top]
  }

  this.peek = function () {
    if (this.top > 0) return this.data[this.top - 1]

    return null
  }

  this.clear = function () {
    delete this.data
    this.data = []
    this.top = 0

    return this
  }
}