import { Autocomplete, TextField } from '@mui/material';

import * as Icons from '../../icons';

export interface TextSearchProps<T> {
  options: Array<T>;
  loading?: boolean;
  loadingText?: string;
  noOptionsText?: string;
  disabled?: boolean;
  readOnly?: boolean;
  size?: 'small' | 'medium';
  disableCloseOnSelect?: boolean;
  placeholder?: string;
  groupBy?: (option: T) => string;
  open?: boolean;
  value?: T;
  inputValue?: string;
  getOptionLabel?: (option: T) => string;
  fullWidth?: boolean;
  getOptionDisabled?: (option: T) => boolean;
  filterOptions?: (options: Array<T>, state: object) => Array<T>;
  filterSelectedOptions?: boolean;
  isOptionEqualToValue?: (option: T, value: T) => boolean;
  onChange?: (
    event: React.SyntheticEvent,
    value: T | Array<T>,
    reason: string,
    details?: string,
  ) => void;
  onOpen?: (event: React.SyntheticEvent) => void;
  onInputChange?: (event: React.SyntheticEvent, value: string, reason: string) => void;
  onHighlightChange?: (event: React.SyntheticEvent, option: T, reason: string) => void;
  onClose?: (event: React.SyntheticEvent, reason: string) => void;
}

export const renderPredictiveLabel = (label: string, inputValue: string) => {
  if (inputValue === '') {
    return label;
  }

  const { elements } = Array.from(
    label.toLowerCase().matchAll(new RegExp(inputValue.toLowerCase(), 'g')),
  ).reduce(
    ({ elements, lastIndex }: any, match) => {
      const matchIndex = match.index || 0;
      const nextIndex = matchIndex + inputValue.length;

      return {
        elements: [
          ...elements.slice(0, -1),
          ...[
            label.substring(lastIndex, matchIndex),
            <span key={matchIndex} className="prediction-highlight">
              {label.substring(matchIndex, nextIndex)}
            </span>,
            label.substring(nextIndex, label.length),
          ].filter((s) => s),
        ],
        lastIndex: nextIndex,
      };
    },
    { elements: [label], lastIndex: 0 },
  );

  return <>{elements}</>;
};

const TextSearch = <T,>({
  placeholder,
  getOptionLabel = (opt: any) => opt.label || opt,
  ...props
}: TextSearchProps<T>) => {
  return (
    <Autocomplete
      {...(props as any)}
      clearIcon={<Icons.Close />}
      renderOption={(props, opt, state) => (
        <li {...props}>
          {renderPredictiveLabel(getOptionLabel(opt as any), state.inputValue)}
        </li>
      )}
      renderInput={(params) => (
        <TextField {...params} variant="standard" placeholder={placeholder} />
      )}
    />
  );
};

export default TextSearch;
