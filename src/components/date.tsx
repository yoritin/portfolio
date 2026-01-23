import { format, parseISO } from 'date-fns'
import { FC } from 'react'

type Props = {
  dateString: string
}

const Date: FC<Props> = ({ dateString }) => {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'yyyy / M / d')}</time>
}

export default Date
