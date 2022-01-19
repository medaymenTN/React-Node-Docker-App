import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { Company } from "../../../types";
import { getCompanySpeciality } from "../../../utils/utils";
import "./styles.css";

interface CompanyCardItemProps {
  company: Company;
}

const CompanyCardItem = (props: CompanyCardItemProps) => {
  const { company } = props;
  const { city, logo, speciality, name } = company;
  const specialityLabel = getCompanySpeciality(speciality);
  return (
    <Card sx={{ width: 345, height: 275 }}>
      <CardActionArea>
        <CardMedia
          className="Card-image"
          component="img"
          image={logo}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Speciality: {specialityLabel}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            City: {city}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CompanyCardItem;
