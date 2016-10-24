/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Servlets;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author alumno
 */
public class PrimerServlet extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
        try {
            /* TODO output your page here. You may use following sample code. */
            out.println("<b>Servlet Name: </b>" + getServletName());
            out.println("<br><b>Protocol: </b>" + request.getProtocol().trim());
            out.println("<br><b>Scheme: </b>" + request.getScheme());
            out.println("<br><b>Servlet Name: </b>" + request.getServerName());
            out.println("<br><b>Servlet Port: </b>" + request.getServerPort());
            out.println("<br><b>Servlet Name: </b>" + request.getServerName());
            out.println("<br><b>Servlet Info: </b>" + request.getServletContext().getServerInfo());
            out.println("<br><b>Servlet Addr: </b>" + request.getRemoteAddr());
            out.println("<br><b>Servlet Host: </b>" + request.getRemoteHost());
            out.println("<br><b>Locale: </b>" + request.getLocale());
            out.println("<br><b>Default Response Buffer: </b>" + response.getBufferSize());
            out.println("<br><b>Request is secure: </b>" + request.isSecure());
            out.println("<br><b>HTTP Method: </b>" + request.getMethod());
            out.println("<br><b>Context Path: </b>" + request.getContextPath());
            out.println("<br><b>Servlet Path: </b>" + request.getServletPath());

        } finally {
            out.close();
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
