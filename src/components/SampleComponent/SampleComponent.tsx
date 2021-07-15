import React from "react"
import Style from "./_sampleComponent"
interface Props {}

const SampleComponent = (props: Props) => {
  return (
    <Style.Base>
      <Style.Text>This is Sample Component</Style.Text>
    </Style.Base>
  )
}

export default SampleComponent
