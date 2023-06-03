interface Props {
  width?: string;
  margin?: string;
  height?: string;
}

export function Hr({ width, margin, height }: Props) {
  return (
    <hr 
      style={{
        width,
        margin,
        height
      }}
    />
  )
}

Hr.defaultProps = {
  width: '100%',
  margin: '0',
  height: '8px'
}