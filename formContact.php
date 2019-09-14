<?php
						$mail = "noreply@preventiviletterescatolate.it";
						$to = "info1cityvisionsrl@gmail.com";/* YOUR EMAIL HERE */
						$subject = "Email di preventivo lettere scatolate riferimento " . $_POST['rifLavoro'] ;
						$headers = "From: sito di preventivazione lettere scatolate, noreply";


            $message .= "\nPREZZI : \n" . $_POST['prices'];
            $message .= "\n\nSPECIFICHE TECNICHE : \n" . $_POST['specTec'];
						$message .= "\n\nELEMENTI SELEZIONATI : \n" . $_POST['elementSelected'];
            $message .= "\n\nCALCOLO SOGLIA MINIMA DI VENDITA : \n" . $_POST['totalCost'];
            $message .= "\n\nCOSTO MATERIALI : \n" . $_POST['materialCost'];
            $message .= "\n\nCOSTI LAVORAZIONE : \n" . $_POST['processCost'];




//Receive Variable
						$sentOk = mail($to,$subject,$message,$headers);
						
						//Confirmation page
						$user = "$mail";
						$usersubject = "Grazie";
						$userheaders = "From: info@cityvisionsrl.it\n";
					
						$usermessage = "Grazie per il tempo speso\n\nECCO UN RESOCONTO\n\n$message"; 
						mail($user,$usersubject,$usermessage,$userheaders);
	
?>
<!-- END SEND MAIL SCRIPT -->   
