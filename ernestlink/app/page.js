import Head from "next/head";
import { Box, Button, Grid, Paper } from "@mui/material";

export default function Home() {
  return (
    <>
      <Grid
        // container
        display={"flex"}
        alignItems="center"
        className="min-h-screen bg-gray-100"
        alignContent="center"
        justifyContent="center">
        <Paper
          elevation={3}
          alignContent="center"
          sx={{
            padding: 6,
            textAlign: "center",
            borderRadius: 4,
          }}>
          <Head>
            <title>Welcome | ErnestLinks Consult</title>
          </Head>
          <Box className="flex flex-col items-center space-y-6">
            <Box component="h1" className="text-4xl font-bold text-gray-800">
              Welcome to ErnestLinks Consult
            </Box>

            <Button
              variant="contained"
              color="primary"
              href="/adminlogin"
              sx={{
                px: 4,
                py: 1.5,
                fontSize: "1.125rem", // text-lg
              }}>
              Login as Admin
            </Button>
          </Box>
        </Paper>
      </Grid>
    </>
  );
}
