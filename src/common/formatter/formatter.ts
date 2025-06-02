import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export class Formatter {
  public static formatDate(
    date: Date,
    formatStr = "dd/MM/yyyy 'às' HH:mm",
  ): string {
    return format(date, formatStr, { locale: ptBR });
  }

  public static distanceToNow(date: Date): string {
    return formatDistanceToNow(date, { locale: ptBR });
  }
}
