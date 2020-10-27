declare module 'luum' {
  type ChannelData = {
    R: number,
    G: number,
    B: number
  }
  function hexToChannels(color: string): ChannelData
  function lumFromChannels(channelData: ChannelData): number
}
