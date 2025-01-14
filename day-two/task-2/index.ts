type SourceData = {
    user_id: string;
    full_name: string;
    contact: {
      phone: string;
      email: string;
    };
    address: {
      city: string;
      zip: string;
    };
    is_active: boolean;
  };
  
  type TargetData = {
    id: string;
    name: string;
    phone: string;
    email: string;
    location: string;
    status: string;
  };
  
  const transformData = (source: SourceData): TargetData => {
    const {
      user_id,
      full_name,
      contact: { phone, email },
      address: { city, zip },
      is_active,
    } = source;
  
    return {
      id: user_id,
      name: full_name,
      phone,
      email,
      location: `${city}, ${zip}`,
      status: is_active ? "active" : "inactive",
    };
  };
  
  const source: SourceData = {
    user_id: "123",
    full_name: "John Doe",
    contact: {
      phone: "+123456789",
      email: "john.doe@example.com",
    },
    address: {
      city: "New York",
      zip: "10001",
    },
    is_active: true,
  };
  
  const target: TargetData = transformData(source);
  
  console.log(target);