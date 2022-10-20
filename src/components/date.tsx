import { format, parseISO } from 'date-fns'
import { VFC } from 'react'

type Props = {
  dateString: string
}

const Date: VFC<Props> = ({ dateString }) => {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'yyyy / M / d')}</time>
}

export default Date
