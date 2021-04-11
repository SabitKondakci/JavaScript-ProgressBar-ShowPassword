<?xml version="1.0" encoding="UTF-8"?>

<html xsl:version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <style>
        table ,th,td{
            border:1px solid black;
            border-collapse: collapse;
            padding:7px;
        }

        tbody tr:nth-child(2n+1){
            background-color:coral;
        }

    </style>
    <body>
        <table>
                <thead>
                    <tr >
                        <th>Author</th>
                        <th>Title</th>
                        <th>Year</th>
                        <th>Category</th>
                        <th>Price</th>
                    </tr>
                </thead>
                
                <tbody>
                    <xsl:for-each select="descendant::bookstore/book
                     | descendant::bookstore/book">
                         <xsl:sort select="date/year" order="descending" data-type="number"/>
                        <tr> 
                            <td><xsl:value-of select="author"/></td> 
                            <td><xsl:value-of select="title"/></td>
                            <td><xsl:value-of select="date/year"/></td>
                            <td><xsl:value-of select="@category"/></td>
                            <td><xsl:value-of select="price"/>TL</td>
                        </tr>
                     
                    </xsl:for-each>  
                </tbody>
        </table>
        
    </body>
</html>
