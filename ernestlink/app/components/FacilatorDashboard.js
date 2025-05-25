import { FileText, CheckCircle, Clock, AlertCircle } from "lucide-react"
import {
  Card,
  CardContent,
  Button,
  Typography,
  Box,
  Container,
  Grid,
  Chip
} from "@mui/material"

export default function FacilatorDashboard() {
  return (
    <Container maxWidth="xl" sx={{ py: 4,  width:"100%", overflow:"auto", height:"80vh",pb:5 }}>
      <Box sx={{ mb: 4, overflow:"auto" }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", color: "#1f2937", mb: 1 }}
        >
          Welcome, John Facilitator
        </Typography>
        <Typography variant="body1" sx={{ color: "#6b7280" }}>
          Here's an overview of your passport applications
        </Typography>
      </Box>

      {/* Status Cards */}
      <Grid container spacing={2} sx={{ mb: 4,  display:"grid", gridTemplateColumns: {
      xs: "1fr",         
      sm: "repeat(2, 1fr)", 
      md: "repeat(3, 1fr)", 
      lg: "repeat(4, 1fr)" }, 
     }}>
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              borderLeft: "4px solid #1e3a8a",
              boxShadow:
                "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)"
            }}
          >
            <CardContent sx={{ p: 3, display: "flex", alignItems: "center" }}>
              <Box
                sx={{
                  backgroundColor: "#dbeafe",
                  p: 1.5,
                  borderRadius: "50%",
                  mr: 2,
                  display: "flex",
                  alignItems: "center",
                  
                  justifyContent: "space-between"
                }}
              >
                <FileText size={24} color="#1e40af" />
              </Box>
              <Box>
                <Typography
                  variant="body2"
                  sx={{ color: "#6b7280", fontSize: "0.875rem" }}
                >
                  Total Applications
                </Typography>
                <Typography
                  variant="h3"
                  sx={{ fontWeight: "bold", fontSize: "1.875rem" }}
                >
                  3
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card
            sx={{
              borderLeft: "4px solid #059669",
              boxShadow:
                "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)"
            }}
          >
            <CardContent sx={{ p: 3, display: "flex", alignItems: "center" }}>
              <Box
                sx={{
                  backgroundColor: "#dcfce7",
                  p: 1.5,
                  borderRadius: "50%",
                  mr: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <CheckCircle size={24} color="#059669" />
              </Box>
              <Box>
                <Typography
                  variant="body2"
                  sx={{ color: "#6b7280", fontSize: "0.875rem" }}
                >
                  Approved
                </Typography>
                <Typography
                  variant="h3"
                  sx={{ fontWeight: "bold", fontSize: "1.875rem" }}
                >
                  2
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card
            sx={{
              borderLeft: "4px solid #f59e0b",
              boxShadow:
                "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)"
            }}
          >
            <CardContent sx={{ p: 3, display: "flex", alignItems: "center" }}>
              <Box
                sx={{
                  backgroundColor: "#fef3c7",
                  p: 1.5,
                  borderRadius: "50%",
                  mr: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Clock size={24} color="#f59e0b" />
              </Box>
              <Box>
                <Typography
                  variant="body2"
                  sx={{ color: "#6b7280", fontSize: "0.875rem" }}
                >
                  Pending
                </Typography>
                <Typography
                  variant="h3"
                  sx={{ fontWeight: "bold", fontSize: "1.875rem" }}
                >
                  1
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card
            sx={{
              borderLeft: "4px solid #ef4444",
              boxShadow:
                "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)"
            }}
          >
            <CardContent sx={{ p: 3, display: "flex", alignItems: "center" }}>
              <Box
                sx={{
                  backgroundColor: "#fee2e2",
                  p: 1.5,
                  borderRadius: "50%",
                  mr: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <AlertCircle size={24} color="#ef4444" />
              </Box>
              <Box>
                <Typography
                  variant="body2"
                  sx={{ color: "#6b7280", fontSize: "0.875rem" }}
                >
                  Rejected
                </Typography>
                <Typography
                  variant="h3"
                  sx={{ fontWeight: "bold", fontSize: "1.875rem" }}
                >
                  0
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Quick Actions */}
      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", color: "#1f2937", mb: 2 }}
      >
        Quick Actions
      </Typography>
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              boxShadow:
                "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)"
            }}
          >
            <CardContent
              sx={{
                p: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center"
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#dbeafe",
                  p: 2,
                  borderRadius: "50%",
                  mb: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <FileText size={24} color="#1e40af" />
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                Register New Passport
              </Typography>
              <Typography variant="body2" sx={{ color: "#6b7280", mb: 3 }}>
                Create a new passport application for a client
              </Typography>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#1e3a8a",
                  "&:hover": { backgroundColor: "#1e40af" }
                }}
              >
                Register Passport
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card
            sx={{
              boxShadow:
                "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)"
            }}
          >
            <CardContent
              sx={{
                p: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center"
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#dbeafe",
                  p: 2,
                  borderRadius: "50%",
                  mb: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Clock size={24} color="#1e40af" />
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                Check Application Status
              </Typography>
              <Typography variant="body2" sx={{ color: "#6b7280", mb: 3 }}>
                View the status of your submitted applications
              </Typography>
              <Button
                variant="outlined"
                sx={{
                  borderColor: "#d1d5db",
                  color: "#374151",
                  "&:hover": {
                    borderColor: "#9ca3af",
                    backgroundColor: "rgba(0, 0, 0, 0.04)"
                  }
                }}
              >
                View Applications
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Recent Applications */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold", color: "#1f2937" }}>
          Recent Applications
        </Typography>
        <Button
          variant="text"
          sx={{
            color: "#6b7280",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "transparent",
              textDecoration: "underline"
            }
          }}
        >
          View All
        </Button>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <ApplicationCard
          name="Emily Davis"
          id="GH87654321"
          date="May 20, 2025"
          status="approved"
        />
        <ApplicationCard
          name="Michael Johnson"
          id="NG98765432"
          date="May 08, 2025"
          status="pending"
        />
        <ApplicationCard
          name="Jane Smith"
          id="GH12345678"
          date="May 03, 2025"
          status="approved"
        />
      </Box>
    </Container>
  )
}

function ApplicationCard({ name, id, date, status }) {
  const getStatusConfig = status => {
    switch (status) {
      case "approved":
        return {
          backgroundColor: "#dcfce7",
          color: "#15803d",
          icon: <CheckCircle size={16} />
        }
      case "pending":
        return {
          backgroundColor: "#fef3c7",
          color: "#a16207",
          icon: <Clock size={16} />
        }
      case "rejected":
        return {
          backgroundColor: "#fee2e2",
          color: "#dc2626",
          icon: <AlertCircle size={16} />
        }
      default:
        return {
          backgroundColor: "#f3f4f6",
          color: "#374151",
          icon: null
        }
    }
  }

  const statusConfig = getStatusConfig(status)

  return (
    <Card
      sx={{
        boxShadow:
          "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)"
      }}
    >
      <CardContent
        sx={{
          p: 3,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 600, color: "#1f2937" }}>
            {name}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#6b7280", fontSize: "0.875rem" }}
          >
            ID: {id}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#6b7280", fontSize: "0.875rem" }}
          >
            Submitted on {date}
          </Typography>
        </Box>

        <Chip
          icon={statusConfig.icon}
          label={status.charAt(0).toUpperCase() + status.slice(1)}
          sx={{
            backgroundColor: statusConfig.backgroundColor,
            color: statusConfig.color,
            fontWeight: 500,
            "& .MuiChip-icon": {
              color: statusConfig.color
            }
          }}
        />
      </CardContent>
    </Card>
  )
}
