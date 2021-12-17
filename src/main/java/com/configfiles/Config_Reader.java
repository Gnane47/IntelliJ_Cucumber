package com.configfiles;

import java.io.File;
import java.io.FileInputStream;
import java.util.Properties;

public class Config_Reader 
{
	public static Properties p;
	public Config_Reader() throws Throwable
	{
		File f = new File("C:\\Users\\gnani\\eclipse-workspace\\Maven_Tasks\\src\\main\\java\\com\\config\\testdata.properties");
		FileInputStream fi = new FileInputStream(f);
		p = new Properties();
		p.load(fi);
	}
	public String geturl() 
	{
		String url = p.getProperty("url");
		return url;
	}
	public String getusername()
	{
		String username = p.getProperty("username");
		return username;
	}
	public String getpassword()
	{
		String password = p.getProperty("password");
		return password;		
	}
	public String getcardnum()
	{
		String cardnum = p.getProperty("cardnum");
		return cardnum;
	}
	public String getcardtype()
	{
		String cardtype = p.getProperty("cardtype");
		return cardtype;
	}
	public String getmonth()
	{
		String month = p.getProperty("month");
		return month;	
	}
	public String getyear()
	{
		String year = p.getProperty("year");
		return year;	
	}
	public String getcvv()
	{
		String cvv = p.getProperty("cvv");
		return cvv;
	}
}
