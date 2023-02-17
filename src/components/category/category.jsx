import { Stack } from "@mui/material";
import { categorys } from "../../constants";
import { colors } from "../../constants/colors";

const Category = ({ selectedCategoryHandler, selectedCategory }) => {
  return (
    <Stack direction={"row"} sx={{ overflowX: "scroll" }}>
      {categorys.map((item) => (
        <button
          key={item.name}
          className="category-btn"
          style={{
            borderRadius: "none",
            background: item.name === selectedCategory && colors.secondary,
            color: item.name === selectedCategory && '#fff'
          }}
          onClick={() => selectedCategoryHandler(item.name)}
        >
          <span style={{ color: item.name === selectedCategory ? '#fff' : colors.secondary, marginRight: "15px" }}>
            {item.icon}
          </span>
          <span style={{ opacity: "1" }}>{item.name}</span>
        </button>
      ))}
    </Stack>
  );
};

export default Category;
