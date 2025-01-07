import {
    Typography,
    Card,
    CardContent,
    Avatar,
    Grid,
    Box,
    Container,
    createTheme,
    ThemeProvider,
  } from "@mui/material";
  
  // Define a custom theme
  const theme = createTheme({
    palette: {
      background: {
        default: "#f9f9f9",
        paper: "#ffffff",
      },
      primary: {
        main: "#1976d2",
      },
      secondary: {
        main: "#388e3c",
      },
      text: {
        primary: "#333333",
        secondary: "#555555",
      },
    },
    typography: {
      fontFamily: "Roboto, sans-serif",
      h3: {
        fontWeight: 700,
      },
      h5: {
        fontWeight: 600,
      },
    },
  });
  
  const About = () => {
    const teamMembers = [
      {
        name: "Neha",
        photo: "/static/Neha.jpeg",
        
      },
      {
        name: "Jigisha",
        photo: "/static/Jigisha.jpeg",
        
      },
      {
        name: "Antara",
        photo: "/static/Antara.jpeg",
        
      },
      {
        name: "Yatish",
        photo: "/static/yatish.jpeg",
        
      },
      {
        name: "Karthik",
        photo: "/static/karthik.jpeg",
        
      },
    ];
  
    const faqData = [
      {
        question: "What is BudgetBuddy?",
        answer:
          "BudgetBuddy is a platform designed to simplify group expense management and help users split costs easily and transparently.",
      },
      {
        question: "How can I track expenses with BudgetBuddy?",
        answer:
          "You can create groups, add expenses, and view balances for each member. The platform also offers analytics to track trends and settlements.",
      },
      {
        question: "Is BudgetBuddy free to use?",
        answer: "Yes, BudgetBuddy is completely free for personal use.",
      },
    ];
  
  
  
  
  
    
    return (
      <ThemeProvider theme={theme}>
        {/* Background Styling */}
        <Box
          sx={{
            minHeight: "100vh",
            background: "linear-gradient(135deg, #e3f2fd, #bbdefb)",
            py: 5,
          }}
        >
          {/* Main Container */}
          <Container
            maxWidth="md"
            sx={{
              bgcolor: "background.paper",
              boxShadow: 3,
              borderRadius: 2,
              p: 5,
              textAlign: "center",
            }}
          >
            {/* Header */}
            <Typography variant="h3" align="center" gutterBottom color="primary">
              BudgetBuddy
            </Typography>
  
            {/* Description */}
            <Typography
              variant="body1"
              align="justify"
              gutterBottom
              sx={{ marginBottom: 4, lineHeight: 1.8 }}
            >
              BudgetBuddy is a user-friendly platform designed to make managing group
              expenses and tracking shared budgets easier than ever. Whether you're
              splitting vacation costs, managing household expenses with roommates, or
              coordinating finances with friends, BudgetBuddy keeps everyone on the same
              page. With powerful tools to track balances, analyze spending trends, and
              settle payments, BudgetBuddy ensures you spend less time worrying about money
              and more time enjoying the moments that matter.
            </Typography>
  
            <Typography
              variant="body1"
              align="justify"
              gutterBottom
              sx={{ lineHeight: 1.8 }}
              color="text.secondary"
            >
              At BudgetBuddy, we believe that financial transparency fosters trust. We
              empower users with tools that promote clarity and fairness in shared expenses.
              With features like detailed analytics and customized settlement options,
              BudgetBuddy helps you manage contributions in a way that feels equitable for
              everyone. Simplify your financial collaborations with BudgetBuddy—because
              teamwork should never feel like a hassle.
            </Typography>
  
            {/* Team Section */}
            <Typography variant="h5" align="center" sx={{ mt: 5 }} color="secondary">
              Meet the Team
            </Typography>
  
            <Grid container spacing={4} sx={{ mt: 3 }}>
              {teamMembers.map((member, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card
                    sx={{
                      maxWidth: 345,
                      boxShadow: 3,
                      borderRadius: 2,
                      overflow: "hidden",
                      textAlign: "center",
                      p: 2,
                    }}
                  >
                    <Avatar
                      alt={member.name}
                      src={member.photo}
                      sx={{
                        width: 100,
                        height: 100,
                        margin: "0 auto",
                        mb: 2,
                        border: "4px solid #1976d2",
                      }}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {member.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {member.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
  
            {/* FAQ Section */}
            <Typography variant="h5" align="center" sx={{ mt: 5 }} color="secondary">
              FAQ
            </Typography>
            <Box sx={{ textAlign: "left", mt: 3 }}>
              {faqData.map((faq, index) => (
                <Box key={index} sx={{ mb: 3 }}>
                  <Typography variant="h6" gutterBottom>
                    Q: {faq.question}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    A: {faq.answer}
                  </Typography>
                </Box>
              ))}
            </Box>
  
            {/* Contact Us Section */}
            <Typography variant="h5" align="center" sx={{ mt: 5 }} color="primary">
              Contact Us
            </Typography>
            <Box sx={{ textAlign: "center", mt: 2 }}>
              <Typography variant="body1">
                Email: <a href="mailto:contact@budgetbuddy.com">contact@budgetbuddy.com</a>
              </Typography>
              <Typography variant="body1" sx={{ mt: 1 }}>
                GitHub:{" "}
                <a href="https://github.com/JigishaBhole/BudgetBuddyProject.git">
                  BudgetBuddy GitHub Repository
                </a>
              </Typography>
            </Box>
          </Container>
        </Box>
      </ThemeProvider>
    );
  };
  
  export default About;
  
  