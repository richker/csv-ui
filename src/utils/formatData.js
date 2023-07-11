function formatData(data) {
    return data.map((item) => {
      const date = new Date(item.date);
      const formattedDate = date.toLocaleDateString(); // Format date as DD/MM/YYYY
      const monthYear = `${date.getMonth() + 1}/${date
        .getFullYear()
        .toString()
        .substr(-2)}`;
  
      return {
        date: formattedDate,
        monthYear: monthYear,
        recall: parseFloat(item.recall),
      };
    });
  }
  
  export default formatData;
  