package com.configfiles;

public class File_Reader
{
	private File_Reader()
	{
		
	}
	public Config_Reader getInstanceCR() throws Throwable
	{
		Config_Reader cr = new Config_Reader();
		return cr;
	}
	public static File_Reader getInstanceFRM()
	{
		File_Reader frm = new File_Reader();
		return frm;
	}
}
