import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useMemo } from 'react'

export function useDate(createdAt: string) {
  const date = useMemo(() => {
    return new Date(createdAt ?? 0)
  }, [createdAt])

  const formattedDates = useMemo(() => {
    return {
      creationDate: formatDistanceToNow(date, {
        locale: ptBR,
        addSuffix: true,
      }),
      dateTitle: format(date, "dd 'de' MMMM 'de' yyyy 'às' HH:mm", {
        locale: ptBR,
      }),
      dateTime: format(date, 'yyyy-MM-dd HH:mm', { locale: ptBR }),
    }
  }, [date])

  return formattedDates
}
