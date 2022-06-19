import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export default function Layout({ children }: { children: any }) {
  return (
    <>
      <Typography sx={{ margin: '20px 5px' }} fontFamily='monospace' align="center" variant="h4">
        Converter
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
        }}
      >
        {children}
      </Box>
    </>
  )
}
