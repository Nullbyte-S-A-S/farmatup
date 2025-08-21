import { Dimensions, StyleSheet } from "react-native"
import { LineChart } from "react-native-chart-kit";


interface DataLineProps {
  label: string[];
  data: number[];
}

export const DataLine = ({ label, data }: DataLineProps) => {

  const { width: screenWidth } = Dimensions.get('window');
  const chartData = {
    labels: label,
    datasets: [
      {
        data: data,
        strokeWidth: 2,
        stroke: "#4A90E2",
      },
    ],
  };

  const chartConfig = {
    backgroundColor: "#ffffff",
    backgroundGradientFrom: "#ffffff",
    backgroundGradientTo: "#ffffff",
    backgroundGradientFromOpacity: 0,
    backgroundGradientToOpacity: 0,
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(74, 144, 226, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(153, 153, 153, ${opacity})`,
    style: {
      borderRadius: 0,
    },
    propsForDots: {
      r: "4",
      strokeWidth: "2",
      stroke: "#4A90E2",
      fill: "#ffffff",
    },
    propsForBackgroundLines: {
      strokeWidth: 1,
      stroke: "#e8e8e8",
    },
    fillShadowGradient: "#4A90E2",
    fillShadowGradientOpacity: 0.4,
  };

  return (
    <LineChart
      data={chartData}
      width={screenWidth - 65}
      height={220}
      yAxisSuffix=""
      yAxisInterval={1}
      chartConfig={chartConfig}
      bezier
      style={styles.chart}
      withVerticalLines={false}
      withHorizontalLines={true}
      withDots={true}
      withShadow={true}
      withInnerLines={true}
      withOuterLines={false}
      segments={4}
      decorator={() => {
        return null;
      }}
    />
  )
}
const styles = StyleSheet.create({
  chart: {
    borderRadius: 0,
    marginVertical: 0,
  },
});