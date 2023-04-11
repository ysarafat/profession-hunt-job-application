import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Spinner from "../Spinner/Spinner";
import PageTitle from "../PageTitle/PageTitle";

const Statistics = () => {
  const data = useLoaderData();
  const spinner = useNavigation();
  if (spinner.state === "loading") {
    return <Spinner />;
  }
  return (
    <>
      <PageTitle>Statistics</PageTitle>
      <div className="container mx-auto mt-16 flex justify-center">
        <ResponsiveContainer width="100%" height={500}>
          <AreaChart
            width={1250}
            height={600}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="basis"
              dataKey="Marks"
              stackId="1"
              stroke="#9774FF"
              fill="#808EFE"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <h3 className="text-center text-2xl font-extrabold mt-8">
        Assignment Analytics
      </h3>
    </>
  );
};

export default Statistics;
