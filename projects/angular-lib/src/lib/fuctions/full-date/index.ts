import date from '../date'

const monthNames: { [key: string]: string } = {
  '01': 'janeiro',
  '02': 'fevereiro',
  '03': 'março',
  '04': 'abril',
  '05': 'maio',
  '06': 'junho',
  '07': 'julho',
  '08': 'agosto',
  '09': 'setembro',
  '10': 'outubro',
  '11': 'novembro',
  '12': 'dezembro',
}

const fullDate = (value: string) => {
  const simpleDate: string[] = date(value).split('/')

  return `${simpleDate[0]} de ${monthNames[simpleDate[1]]} de ${simpleDate[2]}`
}

export default fullDate
