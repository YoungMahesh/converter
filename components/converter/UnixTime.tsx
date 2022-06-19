import { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Paper1 from '../common/Paper1'
import { Button, Stack } from '@mui/material'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker'

export const currTimeInSec = () => {
  return Math.floor(Date.now() / 1000)
}

export default function UnixTime() {
  const [date0, setDate0] = useState<Date>(new Date())
  const [selectedSec, setSelectedSec] = useState<number>(0)

  const [givenSec, setGivenSec] = useState<string>(currTimeInSec().toString())
  const [date1, setDate1] = useState<Date>(new Date())

  useEffect(() => {
    setSelectedSec(Math.floor(date0.getTime() / 1000))
  }, [date0])

  const givenSecToDate = () => {
    try {
      const _date = new Date()
      _date.setTime(parseInt(givenSec) * 1000)
      setDate1(_date)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Paper1>
      <Typography align="center" variant="h6">
        Unix Time
      </Typography>
      <Paper1>
        <Typography>Current Unix_Time: {currTimeInSec()}</Typography>
      </Paper1>

      <Paper1>
        <Stack spacing={2}>
          <Typography variant="h6">Date to Unix_Time </Typography>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
            }}
          >
            <Typography>Select Date: </Typography>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <MobileDatePicker
                label="For mobile"
                value={date0}
                onChange={(_date) => {
                  if (_date !== null) setDate0(_date)
                }}
                renderInput={(params: any) => <TextField {...params} />}
              />
            </LocalizationProvider>
            <LocalizationProvider
              dateAdapter={AdapterDateFns}
            ></LocalizationProvider>
          </Box>

          <Typography>Selected Time: {date0.toString()}</Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Typography>
              Selected Time In Unix Seconds: {selectedSec}
            </Typography>
            <ContentCopyIcon
              onClick={() => {
                navigator.clipboard.writeText(selectedSec.toString())
                alert(`Copied: ${selectedSec}`)
              }}
              sx={{ cursor: 'pointer' }}
            />
          </Box>
        </Stack>
      </Paper1>

      <Paper1>
        <Stack spacing={2}>
          <Typography variant="h6">Unix_Time to Date</Typography>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
            }}
          >
            <Typography>Unix Seconds: </Typography>
            <TextField
              value={givenSec}
              onChange={(e) => setGivenSec(e.target.value)}
            />
          </Box>
          <Button variant="contained" onClick={givenSecToDate}>
            Convert
          </Button>
          <Typography>Date: {date1.toString()}</Typography>
        </Stack>
      </Paper1>
    </Paper1>
  )
}
