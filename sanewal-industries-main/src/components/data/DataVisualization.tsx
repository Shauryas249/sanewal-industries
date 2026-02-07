import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

// Sample data for charts
const productionData = [
  { month: 'Jan', machined: 4000, forged: 2400, automotive: 2400 },
  { month: 'Feb', machined: 3000, forged: 1398, automotive: 2210 },
  { month: 'Mar', machined: 2000, forged: 9800, automotive: 2290 },
  { month: 'Apr', machined: 2780, forged: 3908, automotive: 2000 },
  { month: 'May', machined: 1890, forged: 4800, automotive: 2181 },
  { month: 'Jun', machined: 2390, forged: 3800, automotive: 2500 },
  { month: 'Jul', machined: 3490, forged: 4300, automotive: 2100 },
];

const qualityData = [
  { month: 'Jan', defectRate: 0.8 },
  { month: 'Feb', defectRate: 0.7 },
  { month: 'Mar', defectRate: 0.5 },
  { month: 'Apr', defectRate: 0.3 },
  { month: 'May', defectRate: 0.2 },
  { month: 'Jun', defectRate: 0.4 },
  { month: 'Jul', defectRate: 0.3 },
];

const marketShareData = [
  { name: 'Automotive', value: 50 },
  { name: 'Industrial', value: 35 },
  { name: 'Others', value: 15 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

interface DataVisualizationProps {
  title?: string;
  description?: string;
}

const DataVisualization = ({ title = "Performance Metrics", description }: DataVisualizationProps) => {
  return (
    <div className="w-full">
      <Card>
        <CardHeader className="text-center">
          <CardTitle>{title}</CardTitle>
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="production" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="production">Production Volume</TabsTrigger>
              <TabsTrigger value="quality">Quality Metrics</TabsTrigger>
              <TabsTrigger value="market">Market Share</TabsTrigger>
            </TabsList>
            
            <TabsContent value="production" className="space-y-4">
              <h3 className="text-lg font-medium text-center">Monthly Production Volume by Product Type</h3>
              <div className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={productionData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="machined" name="Machined Components" fill="#0088FE" />
                    <Bar dataKey="forged" name="Forged Components" fill="#00C49F" />
                    <Bar dataKey="automotive" name="Automotive Parts" fill="#FFBB28" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <p className="text-sm text-muted-foreground mt-4 text-center max-w-3xl mx-auto">
                This chart shows the monthly production volume for each product category. 
                The data indicates strong growth in forged components production in March.
              </p>
            </TabsContent>
            
            <TabsContent value="quality" className="space-y-4">
              <h3 className="text-lg font-medium text-center">Monthly Defect Rate Trend</h3>
              <div className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={qualityData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis tickFormatter={(value) => `${value}%`} />
                    <Tooltip formatter={(value) => [`${value}%`, 'Defect Rate']} />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="defectRate" 
                      name="Defect Rate (%)" 
                      stroke="#8884d8" 
                      activeDot={{ r: 8 }} 
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <p className="text-sm text-muted-foreground mt-4 text-center max-w-3xl mx-auto">
                This chart shows the monthly defect rate trend. The data indicates a significant 
                improvement in quality over the first half of the year, with defect rates 
                decreasing from 0.8% to 0.2%.
              </p>
            </TabsContent>
            
            <TabsContent value="market" className="space-y-4">
              <h3 className="text-lg font-medium text-center">Market Share by Industry</h3>
              <div className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={marketShareData}
                      cx="50%"
                      cy="50%"
                      labelLine={true}
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      outerRadius={150}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {marketShareData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => [`${value}%`, 'Market Share']} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <p className="text-sm text-muted-foreground mt-4 text-center max-w-3xl mx-auto">
                This chart shows our market share across different industries. The automotive 
                sector represents our largest market at 50%, followed by industrial applications 
                at 35%.
              </p>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default DataVisualization;