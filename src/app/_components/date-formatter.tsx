import { parseISO, format } from "date-fns";

type Props = {
  dateString: string;
};

const DateFormatter = ({ dateString }: Props) => {
  // Verificar si dateString está definido
  if (!dateString) {
    return null; // Otra opción sería devolver un mensaje de error o una fecha predeterminada
  }

  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>;
};

export default DateFormatter;

