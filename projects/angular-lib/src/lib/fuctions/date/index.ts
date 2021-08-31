const maskDate = (value: any) => {
  let date = String(value).replace(/\D/g, '')

  return date.length > 4
    ? date.replace(/(\d{2})(\d{2})((\d{2,4})|(\d{1}))$/, '$1/$2/$3')
    : date.replace(/(\d{2})(\d{1,2})$/, '$1/$2')
}

const myDate = (date: string = '') => {
  const clearDate = String(date).replace(/[-]/g, '').replace(/[/]/g, '')

  const newDate = clearDate.substr(6,2) + clearDate.substr(4,2) + clearDate.substr(0,4)

  return !date || !Number(clearDate) ? '' : maskDate(newDate)
}

export default myDate
