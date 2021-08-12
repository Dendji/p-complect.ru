import React from 'react'
import Autosuggest, {
  OnSuggestionSelected,
  RenderInputComponent,
} from 'react-autosuggest'
import TextInput from '../TextInput/TextInput'

// Imagine you have a list of languages that you'd like to autosuggest.

// Teach Autosuggest how to calculate suggestions for any given input value.

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = (suggestion: string) => suggestion

// Use your imagination to render suggestions.
const renderSuggestion = (suggestion: string) => <div>{suggestion}</div>

export interface ReactAutosuggestProps {
  suggestions: string[]
  renderInput: RenderInputComponent
  onSuggestionSelected: OnSuggestionSelected<ReactTSuggestion> | undefined
}

export type ReactTSuggestion = string

export class ReactAutosuggest extends React.Component<ReactAutosuggestProps> {
  state: any
  constructor(props: ReactAutosuggestProps) {
    super(props)

    // Autosuggest is a controlled component.
    // This means that you need to provide an input value
    // and an onChange handler that updates this value (see below).
    // Suggestions also need to be provided to the Autosuggest,
    // and they are initially empty because the Autosuggest is closed.
    this.state = {
      value: '',
      suggestions: [],
    }
  }

  getSuggestions = (value: string) => {
    const inputValue = value.trim().toLowerCase()
    const inputLength = inputValue.length

    return inputLength === 0
      ? this.props.suggestions
      : this.props.suggestions.filter(
          (s) => s.toLowerCase().slice(0, inputLength) === inputValue
        )
  }

  onChange = (event: any, { newValue }: any) => {
    this.setState({
      value: newValue,
    })
  }

  renderInputComponent: RenderInputComponent = (
    inputProps: Autosuggest.RenderInputComponentProps
  ) => <TextInput {...inputProps} ref={null} inputRef={inputProps.ref} />
  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }: any) => {
    this.setState({
      suggestions: this.getSuggestions(value),
    })
  }

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    })
  }

  render() {
    const { value, suggestions } = this.state
    const { renderInput, onSuggestionSelected } = this.props

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: 'Я ищу...',
      value,
      onChange: this.onChange,
    }

    // Finally, render it!
    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        onSuggestionSelected={onSuggestionSelected}
        renderSuggestion={renderSuggestion}
        alwaysRenderSuggestions
        inputProps={inputProps}
        renderInputComponent={renderInput}
      />
    )
  }
}
