import { Box, Container, Grid } from "@mui/material";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";

import DashBoardWidget from "src/widgets/DashBoardWidget";
import SellStatistics from "src/widgets/SellStatistics";
import VisitorStatistic from "src/widgets/VisitorStatistic";
import UserStatistic from "src/widgets/UserStatistic";
import UserSellStatistic from "src/widgets/UserSellStatiStics";
import {
  genderValue,
  monthSellData,
  userStatisticData,
  userWeeklyData,
  visitorData,
  weekSellData,
  yearSellData,
} from "src/global/StatisticData";

const App = () => {
  return (
    <Box pt={1}>
      <Container maxWidth="xl">
        <Grid container columnSpacing={7} rowSpacing={4}>
          <Grid
            item
            container
            md={8}
            xs={12}
            columnSpacing={7}
            rowSpacing={2.5}
          >
            <Grid item xs={12} md={6}>
              <DashBoardWidget
                icon={BusinessCenterIcon}
                totalItem="Total Product"
                totalValue={932}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <DashBoardWidget
                icon={InsertDriveFileIcon}
                totalItem="Total Order"
                totalValue={654}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <DashBoardWidget
                icon={MonetizationOnIcon}
                totalItem="Total Sell"
                totalValue={854}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <DashBoardWidget
                icon={CurrencyBitcoinIcon}
                totalItem="Total Customer"
                totalValue={754}
              />
            </Grid>
          </Grid>
          <Grid item xs={12} md={4}>
            <VisitorStatistic visitorData={visitorData} />
          </Grid>
          <Grid item xs={12}>
            <SellStatistics
              weekSellData={weekSellData}
              monthSellData={monthSellData}
              yearSellData={yearSellData}
            />
          </Grid>

          <Grid item xs={12} md={3}>
            <UserStatistic genderValue={genderValue} />
          </Grid>
          <Grid item md={9} xs={12}>
            <UserSellStatistic
              userStatisticData={userStatisticData}
              userWeeklyData={userWeeklyData}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default App;
