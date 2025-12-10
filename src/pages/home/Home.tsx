import { lazy,  } from "react";
import { Link } from "react-router";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import TableFloat from "../catalogue/subcomps/Table";
import { DottedPatternAreaChart } from "../meters/subcomps/dotted-chart";

const Home = () => {
  return (
    <div className="space-y-4 py-4">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink render={<Link to="/" />}>Home</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
<div className='grid grid-cols-2 gap-2'>
                {Array.from({ length: 2 }).map((_, index) => (
                    <DottedPatternAreaChart key={index} />
                ))}
            </div>
      <TableFloat />
    </div>
  );
};

export default Home;
