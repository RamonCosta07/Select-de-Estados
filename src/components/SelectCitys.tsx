import Select from "react-select";
import { useCitys } from "../hooks/useCitys";

export const SelectCitys = ({ uf }) => {
  const { citys, loading } = useCitys({
    uf,
  });

  const citysOptions = citys.map((city) => ({
    value: city.codigo_ibge,
    label: city.nome,
  }));

  return (
    <Select
      isLoading={loading}
      isDisabled={loading || citysOptions.length === 0}
      options={citysOptions}
      placeholder="Selecione a sua Cidade"
    />
  );
};
