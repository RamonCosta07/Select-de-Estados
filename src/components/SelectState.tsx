import { useState } from "react";
import { useStates } from "../hooks/useStates";
import Select from "react-select";

export const SelectState = ({ onChange }) => {
  const { states } = useStates();
  const [selectedState, setSelectedState] = useState<number | null>(null);

  const stateOptions = states.map((state) => ({
    value: state.id,
    label: state.nome,
  }));

  const selectedOptionState = stateOptions.find(
    (e) => e.value === selectedState
  );

  const handleStateUpdate = (event) => {
    setSelectedState(event.value);
    const selectedUf = states.find((e) => e.id === event.value)?.sigla;
    onChange(selectedUf);
  };

  return (
    <Select
      placeholder="Selecione o seu Estado"
      options={stateOptions}
      value={selectedOptionState}
      onChange={handleStateUpdate}
    />
  );
};
